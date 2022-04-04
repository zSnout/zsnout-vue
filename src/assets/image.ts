let canvas = document.createElement("canvas");
let context = canvas.getContext("2d")!;

export function blobToImage(blob: Blob, width?: number, height?: number) {
  return new Promise<ImageData>((resolve) => {
    let url = URL.createObjectURL(blob);
    let image = document.createElement("img");

    image.onload = () => {
      canvas.width = width || image.width;
      canvas.height = height || image.height;

      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      resolve(context.getImageData(0, 0, canvas.width, canvas.height));
    };

    image.src = url;
  });
}

export function dataToImage(data: ImageData) {
  return new Promise<HTMLImageElement>((resolve) => {
    canvas.width = data.width;
    canvas.height = data.height;

    context.putImageData(data, 0, 0);
    let url = canvas.toDataURL("image/png");
    let image = document.createElement("img");

    image.onload = () => {
      resolve(image);
    };

    image.src = url;
  });
}

export function streamToVideo(stream: MediaStream) {
  return new Promise<HTMLVideoElement>((resolve) => {
    let video = document.createElement("video");

    video.onloadedmetadata = () => resolve(video);
    video.srcObject = stream;
    video.play();
  });
}

export function captureFrame(
  video: HTMLVideoElement,
  width?: number,
  height?: number
) {
  canvas.width = width || video.videoWidth;
  canvas.height = height || video.videoHeight;

  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  return context.getImageData(0, 0, canvas.width, canvas.height);
}

export function promptForImage() {
  return new Promise<ImageData>((resolve, reject) => {
    let input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";

    input.onchange = () => {
      if (input.files) {
        let file = input.files[0];
        resolve(blobToImage(file));
      } else reject();
    };

    input.click();
  });
}

export function downloadImage(image: HTMLImageElement) {
  let link = document.createElement("a");
  link.href = image.src;
  link.download = "";
  link.click();
}

export async function greenBlueSwap() {
  let image = await promptForImage();
  for (let i = 0; i < image.data.length; i += 4) {
    let [g, b] = [image.data[i + 1], image.data[i + 2]];
    [image.data[i + 1], image.data[i + 2]] = [1.5 * b, 2 * g];
  }

  downloadImage(await dataToImage(image));
}
