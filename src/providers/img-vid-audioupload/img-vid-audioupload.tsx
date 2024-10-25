// ImgVidAudiouploadProvider.tsx
class ImgVidAudiouploadProvider {
  private base64img: string = '';
  private video: any = null;
  private audio: any = null;
  private url: string = 'https://vortexmobievotingapp.000webhostapp.com/imageUpload.php';

  // Setters and Getters for Image
  setImage(img: string) {
    this.base64img = img;
  }

  getImage(): string {
    return this.base64img;
  }

  // Setters and Getters for Video
  setVideo(video: any) {
    this.video = video;
  }

  getVideo(): any {
    return this.video;
  }

  // Setters and Getters for Audio
  setAudio(audio: any) {
    this.audio = audio;
  }

  getAudio(): any {
    return this.audio;
  }
}

export default new ImgVidAudiouploadProvider();
