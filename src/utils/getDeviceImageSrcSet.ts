import { Device } from '../providers/UIDBProvider/types';

const getImageUrl = (id: string, image: string, size: number) =>
  `https://images.svc.ui.com/?u=https://static.ui.com/fingerprint/ui/images/${id}/default/${image}.png&w=${size}&q=100`;

const sizes = [25, 32, 51, 64, 101, 128, 129, 256, 257, 512, 1000];

export default (device: Device) => {
  const { images, id } = device;
  const { default: defaultImage } = images;

  return `${sizes
    .map((size) => `${getImageUrl(id, defaultImage, size)} ${size}w`)
    .join(', ')}`;
};
