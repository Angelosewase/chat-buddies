const WsConn: WebSocket = new WebSocket("ws://localhost:8001/ws");

interface someMessage {}

export function initializeWebSocketServerConnection() {
  WsConn.onopen = (event: Event) => {
    console.log("connected succesfully", event);
  };
  WsConn.onmessage = (msg: MessageEvent) => {
    //some logic to handle message display
    console.log(msg);
  };
}

export function SendMessage(msg: someMessage) {
  if(WsConn.readyState == WebSocket.OPEN){
    const messageString = JSON.stringify(msg);
    WsConn.send(messageString);
}else{
    console.log("not connected to the server")
}
}

export default WsConn;
