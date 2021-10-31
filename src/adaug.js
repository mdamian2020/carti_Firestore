import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Adaug = (props) => {
    const [src, setSrc] = useState("");
    const [titlu, setTitlu] = useState("");
    const [text, setText] = useState("");
    const [autpret, setAutpret] = useState("");

    const tratezSubmit = (evt) => {
      evt.preventDefault();
      const carte = {
        src: `${src}`,
        titlu,   //  scriere simplificata pentru titlu: titlu
        text,
        autpret,
      };
      props.transmit(carte);  //  Transmit spre <App /> obiectul "carte" 
      //  Golesc controalele formularului
      setSrc("");
      setTitlu("");
      setText("");
      setAutpret("");
    }

    const stil = {
        marginTop: "2rem",
        backgroundColor: "#ddd",
        padding: "20px",
        width: "750px",
    }

    return (
    <Container style={stil}>
        <Form onSubmit={tratezSubmit}>

          <Form.Group>
            <Form.Label>Titlul:</Form.Label>
            <Form.Control type="text" value={titlu}
                    onChange={e => setTitlu(e.target.value)} />
          </Form.Group>

          <Form.Group>
              <Form.Label>Denumire imagine:</Form.Label>
              <Form.Control type="text" value={src}
                      onChange={e => setSrc(e.target.value)} />
          </Form.Group>

          <Form.Group>
              <Form.Label>Descriere:</Form.Label>
              <Form.Control as="textarea" rows={3} value={text}
                      onChange={e => setText(e.target.value)} />
          </Form.Group>

          <Form.Group>
              <Form.Label>Autor și preț:</Form.Label>
              <Form.Control type="text" value={autpret}
                      onChange={e => setAutpret(e.target.value)} />
          </Form.Group>

          <Button variant="primary" type="submit">
              Submit
          </Button>

        </Form>
    </Container>
    );
}

export default Adaug;