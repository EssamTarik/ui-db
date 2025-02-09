import { vi, describe, it, expect, beforeEach } from 'vitest';
import { cleanup, render } from '@testing-library/react';
import mockDevices from '../../../../utils/mocks/mockDevices';
import DeviceCard from '..';
import { Device } from '../../../../providers/UIDBProvider/types';

vi.mock('../../../misc/ProductLink', () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="product-card">{children}</div>
  ),
}));

vi.mock('../../../misc/DeviceImage', () => ({
  default: () => <div data-testid="device-image" />,
}));

describe('DeviceCard', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    cleanup();
  });

  it('should render device card', async () => {
    const { findByTestId } = render(
      <DeviceCard device={mockDevices[0] as Device} />
    );
    await findByTestId('product-card');
    expect((await findByTestId('device-name')).innerText).toBe('product #1');
    expect((await findByTestId('device-short-name')).innerText).toBe('pr1');
  });
});
