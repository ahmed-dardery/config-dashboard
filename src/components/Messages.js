import { Alert, Form } from "react-bootstrap";

const Messages = ({ msgs }) => {
  return (<div>
    {
      msgs.map((msg, i) => {
        return <Alert variant={msg.variant} key={i}>
          {msg.title && <b>{msg.title}: </b>}
          {
            msg.textarea ? <Form.Control className="output-area" as="textarea" value={msg.content} readOnly/> : <div> {renderMsg(msg)} </div>
          }
        </Alert>
      })
    }
  </div>)
}

const renderMsg = (msg) => (
  Array.isArray(msg.content) ?
              msg.content.map(c => <p className="msg-p">{c}</p>) :
              <p className="msg-p">{msg.content}</p>
)
export default Messages;