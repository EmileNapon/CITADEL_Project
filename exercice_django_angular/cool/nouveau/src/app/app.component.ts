


import { Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title='';

  recording = false;
  mediaRecorder: MediaRecorder |null=null;
  chunks: Blob[] = [];
  audioUrl: string='';

  startRecording() {
    this.recording = true;
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then((stream) => {
        this.mediaRecorder = new MediaRecorder(stream);

        this.mediaRecorder.ondataavailable = (e) => {
          this.chunks.push(e.data);
        };

        this.mediaRecorder.onstop = () => {
          const audioBlob = new Blob(this.chunks, { type: 'audio/wav' });
          this.audioUrl = URL.createObjectURL(audioBlob);
        };

        this.mediaRecorder.start();
      });
  }

  stopRecording() {
    if (this.mediaRecorder) {
      this.recording = false;
      this.mediaRecorder.stop();
    }
  }
  playAudio() {
    if (this.audioUrl) {
      const audio = new Audio(this.audioUrl);
      audio.play();
    }
  }
}
