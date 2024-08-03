import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable, takeUntil } from 'rxjs';

export interface SynthVoice {
  lang: string;
  name: string;
}

export interface StreamState {
  playing: boolean;
  readableCurrentTime: string;
  readableDuration: string;
  duration: number | undefined;
  currentTime: number | undefined;
  canplay: boolean;
  error: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SpeechSynthesisService {

  private stop$ = new Subject();
  private synth: SpeechSynthesis = window.speechSynthesis;
  private utterThis: SpeechSynthesisUtterance = new SpeechSynthesisUtterance;
  voices: SynthVoice[] = [];
  synthesisVoices: SpeechSynthesisVoice[] = []
  synthEvents = [
    'ended', 'error', 'play', 'playing', 'pause', 'timeupdate', 'canplay', 'loadedmetadata', 'loadstart'
  ];
  private state: StreamState = {
    playing: false,
    readableCurrentTime: '',
    readableDuration: '',
    duration: undefined,
    currentTime: undefined,
    canplay: false,
    error: false,
  };
  private stateChange: BehaviorSubject<StreamState> = new BehaviorSubject(this.state);

  async checkPlayerCompatibility() {
    let isCompatible = true;
    this.utterThis.text = 'Browser compatible';
    await this.synth.speak(this.utterThis);
    this.utterThis.onerror = function(event) {
      isCompatible = false;
    }
    return isCompatible;
  }

  async generateVoices() {
    setTimeout(() => {
      if (typeof window !== "undefined") {
        // browser code
      let speechSynthesisVoice: SpeechSynthesisVoice[];
      speechSynthesisVoice = window.speechSynthesis.getVoices();
      this.synthesisVoices = speechSynthesisVoice.sort(function (a, b) {
        const aname = a.name.toUpperCase(), bname = b.name.toUpperCase();
        if ( aname < bname ) return -1;
        else if ( aname == bname ) return 0;
        else return +1;
      });
  
      for(let i = 0; i < this.synthesisVoices.length ; i++) {
        let voice = {
          name: this.synthesisVoices[i].name,
          lang: this.synthesisVoices[i].lang
        }
        this.voices.push(voice);
      }
     }
    }, 10);
  }

  getVoices(): SynthVoice[] {
    if (this.voices.length < 1) {
      this.generateVoices();
    }
    return this.voices;
  }

  private streamObservable(inputTxt: string, voiceName?: string, pitch?: number, rate?: number, volume?: number) {
    return new Observable(observer => {
      this.utterThis.text = inputTxt;
      this.utterThis.voice = this.synthesisVoices.filter(x => x.name === voiceName)[0];
      this.utterThis.pitch = pitch ? pitch : 1;
      this.utterThis.rate = rate ? rate : 1;
      this.utterThis.volume = volume ? volume : 0.7;
      this.synth.speak(this.utterThis);
  
      const handler = (event: Event) => {
        this.updateStateEvents(event);
        observer.next(event);
      };
  
      this.addEvents(this.synth, this.synthEvents, handler);
      return () => {
        this.synth.pause();
        this.synth.cancel();
        this.removeEvents(this.synth, this.synthEvents, handler);
        this.resetState();
      };
    });
  }

  private addEvents(obj: SpeechSynthesis, events: Array<string>, handler: (event: Event) => void) {
    events.forEach(event => {
      obj.addEventListener(event, handler);
    });
  }

  private removeEvents(obj: SpeechSynthesis, events: string[], handler: (event: Event) => void) {
    events.forEach(event => {
      obj.removeEventListener(event, handler);
    });
  }

  play(content: string) {
    if (this.state?.canplay) {
      this.synth.speak(this.utterThis);
    } else {
      this.stop();
      this.streamObservable(content).pipe(takeUntil(this.stop$)).subscribe();
    }
  }

  resume() {
    if (this.synth !== undefined) {
      this.stop();
      this.synth.speak(this.utterThis);
    }
  }

  pause() {
    if (this.synth !== undefined) {
      this.synth.pause();
    }
  }

  stop() {
    this.stop$.next(undefined);
  }


  private updateStateEvents(event: Event): void {
    switch (event.type) {
      case 'playing':
        this.state.playing = true;
        break;
      case 'pause':
        this.state.playing = false;
        break;
      case 'error':
        this.resetState();
        this.state.error = true;
        break;
    }
    this.stateChange.next(this.state);
  }

  private resetState() {
    this.state = {
      playing: false,
      readableCurrentTime: '',
      readableDuration: '',
      duration: undefined,
      currentTime: undefined,
      canplay: false,
      error: false
    };
  }

  getState(): Observable<StreamState> {
    return this.stateChange.asObservable();
  }
}
