import { Device } from "../providers/UIDBProvider/types";

const getImageUrl = (id: string, image: string, size: number) => `https://images.svc.ui.com/?u=https://static.ui.com/fingerprint/ui/images/${id}/default/${image}.png&w=${size}&q=75`

const sizes = [20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];

export default (device: Device) => {
  const { images, id } = device;
  const { default: defaultImage } = images;

  return `${
    sizes
      .map((size) => `${getImageUrl(id, defaultImage, size)} ${size}w`)
      .join(', ')
  }`
}