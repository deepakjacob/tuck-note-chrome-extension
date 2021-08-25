export enum Sender {
  React,
  Content,
}

export enum MessageType {
  ACTIVATE_SIDE_BAR = 'activate_side_bar',
}

export interface ChromeRequest {
  from: Sender;
  message: MessageType;
}
