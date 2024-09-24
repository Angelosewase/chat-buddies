

export interface IMessageBase {
  chat_id:string,
  content:string,
  sender_id:string
}

export function initializeWebSocketServerConnection(UserId:string ):WebSocket  {
  const   WsConn: WebSocket = new WebSocket(`ws://localhost:8001/ws?UserId=${UserId}`)
  WsConn.onopen = (event: Event) => {
    console.log("connected succesfully", event);

  };
  WsConn.onmessage = (msg: MessageEvent) => {
    //some logic to handle message display
    console.log("received message")
    console.log(msg);
  };
  WsConn.onerror= (error: Event)=>{
   console.log("error connecting to the server ")
   console.log(error)
  }
  WsConn.onclose = ()=>{
    console.log("socket connection close")
  }

  return WsConn
}

export function SendMessage(msg: IMessageBase, WsConn:WebSocket) {
  if(WsConn.readyState == WebSocket.OPEN){
    const messageString = JSON.stringify(msg);
    WsConn.send(messageString);
}else{
    console.log("not connected to the server")
}
}



