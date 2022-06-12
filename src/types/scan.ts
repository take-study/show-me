type ScanNode = {
  camera: MediaStream;
  video: React.RefObject<HTMLVideoElement>;
  picture: React.RefObject<HTMLCanvasElement>;
};

export default ScanNode;
