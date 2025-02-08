export interface UIDBData {
  devices: Device[];
  version: string;
}

export interface Device {
  guids: string[];
  icon: Icon;
  id: string;
  images: Images;
  line: Line;
  product: Product;
  shortnames: string[];
  sku: string;
  sysid?: string;
  sysids: string[];
  triplets: Triplet[];
  uisp?: Uisp;
  videos: Videos;
  btle?: Btle;
  jrf?: string[];
  jpa?: string[];
  compliance?: Compliance;
  deviceType?: DeviceType;
  minAdoptVersion?: MinAdoptVersion;
  unifi?: Unifi;
  isARSupported?: boolean;
  fcc?: string;
  ic?: string;
}

export interface Btle {
  factoryDefault: string;
  userConfigured: string;
}

export interface Compliance {
  fcc?: string;
  ic?: string;
  icEmi: ICEmi;
  modelName: string;
  rcm?: boolean;
  rfCmFcc?: number;
  rfCmIc?: number;
  text: Text;
  anatel?: string;
  ncc?: string;
  productName?: string;
  cn?: string;
  jrf?: string[];
  wifi?: Wifi;
  indoorOnly?: boolean;
  kc?: string;
  jnfc?: string;
  jpa?: string[];
}

export enum ICEmi {
  CanIces003ANmb003A = 'CAN ICES-003(A)/NMB-003(A)',
  CanIces003BNmb003B = 'CAN ICES-003(B)/NMB-003(B)',
  ICEmiCode = 'ic_emi_code',
}

export interface Text {
  CA: CA[];
  US: Me[];
  BR?: string[];
}

export enum CA {
  IC = 'IC',
  RF = 'RF',
  Sar = 'SAR',
  Wifi5 = 'WIFI_5',
  Wifi5_DetAnt = 'WIFI_5_DET_ANT',
  Wifi6 = 'WIFI_6',
}

export enum Me {
  FccA = 'FCC_A',
  FccB = 'FCC_B',
  RF = 'RF',
  Sar = 'SAR',
  Wifi5 = 'WIFI_5',
  Wifi6 = 'WIFI_6',
}

export enum Wifi {
  The5E = '5e',
  The6E = '6e',
}

export enum DeviceType {
  Camera = 'camera',
  Chime = 'chime',
  Console = 'console',
  Doorlock = 'doorlock',
  Light = 'light',
  NetworkServerHost = 'network-server-host',
  Sensor = 'sensor',
  Viewer = 'viewer',
}

export interface Icon {
  id: string;
  resolutions: Array<number[]>;
}

export interface Images {
  default: string;
  nopadding: string;
  topology: string;
  'mobile-connection'?: string;
  'mobile-internet-connected'?: string;
  'mobile-no-internet'?: string;
  'left-nopadding'?: string;
  'right-nopadding'?: string;
}

export interface Line {
  id: ID;
  name: Name;
}

export enum ID {
  Airfiber = 'airfiber',
  Airmax = 'airmax',
  Amplifi = 'amplifi',
  Apollo = 'apollo',
  Edgemax = 'edgemax',
  Ltu = 'ltu',
  Mfi = 'mfi',
  Sunmax = 'sunmax',
  Ufiber = 'ufiber',
  Uisp = 'uisp',
  UnifiAccess = 'unifi-access',
  UnifiConnect = 'unifi-connect',
  UnifiDrive = 'unifi-drive',
  UnifiLED = 'unifi-led',
  UnifiLTE = 'unifi-lte',
  UnifiMobility = 'unifi-mobility',
  UnifiNetwork = 'unifi-network',
  UnifiProtect = 'unifi-protect',
  UnifiTalk = 'unifi-talk',
  Unknown = 'unknown',
  Wave = 'wave',
  Wifiman = 'wifiman',
}

export enum Name {
  AirFiber = 'AirFiber',
  AirMAX = 'airMAX',
  AmpliFi = 'AmpliFi',
  Apollo = 'Apollo',
  EdgeMAX = 'EdgeMAX',
  Ltu = 'LTU',
  MFi = 'mFi',
  SunMAX = 'SunMAX',
  UFiber = 'UFiber',
  Uisp = 'UISP',
  UniFi = 'UniFi',
  UniFiAccess = 'UniFi Access',
  UniFiConnect = 'UniFi Connect',
  UniFiDrive = 'UniFi Drive',
  UniFiLED = 'UniFi LED',
  UniFiLTE = 'UniFi LTE',
  UniFiMobility = 'UniFi Mobility',
  UniFiProtect = 'UniFi Protect',
  UniFiTalk = 'UniFi Talk',
  Unknown = 'Unknown',
  Wave = 'Wave',
  WiFiMan = 'WiFiMan',
}

export interface MinAdoptVersion {
  net?: string;
  protect?: string;
}

export interface Product {
  abbrev: string;
  name: string;
}

export interface Triplet {
  k1?: string;
  k2?: string;
  k3?: string;
}

export interface Uisp {
  bleServices: { [key: string]: BleServiceValue };
  firmware: Firmware;
  line: string;
  nameLegacy: string[];
}

export interface BleServiceValue {
  mode: Mode;
}

export enum Mode {
  Default = 'default',
  DefaultLegacy = 'default_legacy',
  Factory = 'factory',
  FactoryLegacy = 'factory_legacy',
}

export interface Firmware {
  board: string[];
  platform: null | string;
}

export interface Unifi {
  adoptability?: Adoptability;
  network?: Network;
  protect?: Protect;
}

export enum Adoptability {
  Adoptable = 'adoptable',
  Standalone = 'standalone',
}

export interface Network {
  bleServices?: BleServiceElement[];
  deviceCapabilities: string[];
  model: string;
  radios: Radios;
  type: string;
  chipset?: string;
  ethernetMaxSpeedMegabitsPerSecond?: number;
  features?: NetworkFeatures;
  minimumFirmwareRequired?: null | string;
  numberOfPorts?: number;
  systemIdHexadecimal?: string;
  diagram?: string[];
  ports?: NetworkGroups;
  details?: Details;
  knownUnsupportedFeatures?: KnownUnsupportedFeature[];
  linkNegotiation?: LinkNegotiation;
  networkGroups?: NetworkGroups;
  shadowMode?: ShadowMode;
  subtypes?: Subtype[];
  hybrid?: string;
  optionalWanPortIndexes?: number[];
  power?: Power;
  temperatureSensors?: TemperatureSensor[];
  primaryPortGroupCount?: number;
  outlets?: Outlets;
  outletsDiagram?: string[];
  primaryOutletGroupCount?: number;
  rps?: Rps;
  optionalWanPortNumbers?: number[];
}

export interface BleServiceElement {
  configured: string;
  default: string;
  features?: BleServiceFeatures;
}

export interface BleServiceFeatures {
  ucore: boolean;
}

export interface Details {
  ipsThroughput: string;
  legacyPortRemap?: boolean;
}

export interface NetworkFeatures {
  atfDisabled?: boolean;
  ax?: boolean;
  bandsteer?: boolean;
  be?: boolean;
  gen?: number;
  outdoorModeSupport?: boolean;
  poe?: boolean;
  zh?: boolean;
  ac?: boolean;
  brcm?: boolean;
  airTime?: boolean;
  airView?: boolean;
  dfs?: boolean;
  fan?: Fan;
  legacyPortRemap?: boolean;
  sfpPlusSupported?: boolean;
}

export enum Fan {
  Alwayson = 'alwayson',
  Simple = 'simple',
}

export enum KnownUnsupportedFeature {
  SwitchCapDot1X = 'SWITCH_CAP_DOT1X',
  SwitchCapEgressRateLimit = 'SWITCH_CAP_EGRESS_RATE_LIMIT',
  SwitchCapLldpMed = 'SWITCH_CAP_LLDP_MED',
  SwitchCapPortIsolation = 'SWITCH_CAP_PORT_ISOLATION',
  SwitchCapStormControl = 'SWITCH_CAP_STORM_CONTROL',
  SwitchCapStp = 'SWITCH_CAP_STP',
}

export interface LinkNegotiation {
  eth0?: Eth0Class;
  eth1?: Eth0Class;
  eth2?: Eth2Class;
  eth3?: Eth2Class;
  eth4?: Eth2Class;
  eth5?: Eth0Class;
  eth6?: Eth2Class;
  eth10?: Eth0Class;
  eth7?: Eth2Class;
  eth8?: Eth2Class;
  eth9?: Eth0Class;
  eth15?: Eth0Class;
  eth16?: Eth0Class;
  eth18?: Eth0Class;
  eth19?: Eth0Class;
}

export interface Eth0Class {
  portIdx: number;
  supportedValues: SupportedValue[];
}

export enum SupportedValue {
  Autoneg = 'autoneg',
  The10000Fdx = '10000 FDX',
  The1000Fdx = '1000 FDX',
  The100Fdx = '100 FDX',
  The100Hdx = '100 HDX',
  The10Fdx = '10 FDX',
  The10Hdx = '10 HDX',
  The25000Fdx = '25000 FDX',
  The2500Fdx = '2500 FDX',
  The5000Fdx = '5000 FDX',
}

export interface Eth2Class {
  portIdx?: number;
  supportedValues?: SupportedValue[];
  bindWith?: string;
}

export interface NetworkGroups {
  eth0?: string;
  eth1?: string;
  eth2?: string;
  eth3?: string;
  eth4?: string;
  eth5?: string;
  eth6?: string;
  eth10?: string;
  eth7?: string;
  eth8?: string;
  eth9?: string;
  eth11?: string;
  eth12?: string;
  eth13?: string;
  eth14?: string;
  eth15?: string;
  eth16?: string;
  eth17?: string;
  eth18?: string;
  eth19?: string;
  sfp28?: number[] | string;
  standard?: number[] | number | string;
  qsfp28?: string;
  plus?: number[] | number | string;
  sfp?: number[];
}

export interface Outlets {
  lan?: number[];
  meta?: { [key: string]: Meta };
  standard: number[] | number | string;
  usb?: number[] | string;
  wan?: number[];
}

export interface Meta {
  center?: boolean;
  rotation?: Rotation;
  portIdx?: number;
}

export enum Rotation {
  The90Deg = '-90deg',
}

export interface Power {
  capacity: number;
}

export interface Radios {
  '6e'?: The6_E;
  na?: The6_E;
  ng?: The6_E;
  swift?: Swift;
}

export interface The6_E {
  gain?: number;
  maxPower?: number;
  maxSpeedMegabitsPerSecond: number;
}

export interface Swift {
  gain: number;
  maxPower: number;
}

export interface Rps {
  diagram: string[];
  primaryPortGroupCount: number;
}

export interface ShadowMode {
  interconnectPortInterface: string;
  interconnectPortNumber: number;
}

export enum Subtype {
  Uap = 'uap',
  Ugw = 'ugw',
  Usw = 'usw',
}

export interface TemperatureSensor {
  maxTemp?: number;
  sensor: string;
}

export interface Protect {
  fov: number;
  suggestedDistance: number;
}

export interface Videos {
  'mobile-intro'?: string;
  'mobile-setup-wizard-plugin'?: string;
  'mobile-setup-wizard-testing-connection'?: string;
}
