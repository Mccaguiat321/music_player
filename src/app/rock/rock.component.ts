import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-rock',
  templateUrl: './rock.component.html',
  styleUrls: ['./rock.component.css']
})
export class RockComponent implements OnInit, OnDestroy {

  songs = [
    { title: 'Bohemian Rhapsody', artist: 'Queen', url: 'assets/Queen_–_Bohemian_Rhapsody__Official_Video_Remastered_(256k).mp3', duration: 0 },
    { title: 'Stairway to Heaven', artist: 'Led Zeppelin', url: 'assets/Led_Zeppelin_-_Stairway_To_Heaven__Lyrics_(256k).mp3', duration: 0 },
    { title: 'Hotel California', artist: 'Eagles', url: 'assets/Hotel_California__2013_Remaster_(256k).mp3', duration: 0 }
  ];

  audio: HTMLAudioElement | null = null;
  currentSong: string | null = null;
  currentTime: number = 0;
  isPaused: boolean = true;
  private timeUpdateInterval: any;

  ngOnInit() {
    this.timeUpdateInterval = setInterval(() => {
      if (this.audio) {
        this.currentTime = this.audio.currentTime;
      }
    }, 1000);
  }

  ngOnDestroy() {
    if (this.timeUpdateInterval) {
      clearInterval(this.timeUpdateInterval);
    }
  }

  playPauseSong(url: string, songIndex: number) {
    if (this.audio && this.currentSong === url) {
      if (this.audio.paused) {
        this.audio.play();
        this.isPaused = false;
      } else {
        this.audio.pause();
        this.isPaused = true;
      }
    } else {
      if (this.audio) {
        this.audio.pause();
      }

      this.audio = new Audio(url);
      this.currentSong = url;

      this.audio.addEventListener('loadedmetadata', () => {
        this.songs[songIndex].duration = this.audio!.duration;
      });

      this.audio.play();
      this.isPaused = false;
    }
  }

  // Add the method to calculate the percentage of the song that has played
getProgressBarWidth(url: string): number {
  if (this.audio && this.currentSong === url) {
    return (this.currentTime / this.audio.duration) * 100;
  }
  return 0;
}

// Add the method to seek to the new time based on where the user clicks on the progress bar
seekSong(event: MouseEvent, url: string): void {
  if (this.audio && this.currentSong === url) {
    const progressBar = event.currentTarget as HTMLElement;
    const clickPosition = event.offsetX; // Get the position clicked on the progress bar
    const barWidth = progressBar.offsetWidth; // Get the total width of the progress bar
    const clickPercentage = clickPosition / barWidth; // Calculate the percentage clicked
    const newTime = clickPercentage * this.audio.duration; // Calculate the new time
    this.audio.currentTime = newTime; // Set the audio's current time
    this.currentTime = this.audio.currentTime; // Update the UI's current time
  }
}


  formatTime(seconds: number): string {
    if (isNaN(seconds)) {
      return '0:00';
    }
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  }

  getAudioDuration(): number {
  if (this.audio && !isNaN(this.audio.duration)) {
    return this.audio.duration;
  }
  return 0; // Return 0 if the duration is not available

  
}
getDuration(): number {
  return this.audio ? this.audio.duration : 0;
}

}
