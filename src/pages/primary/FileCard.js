const FileCard = ({ title, image, fileLinks }) => (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title className="text-center">{title}</Card.Title>
        <Row>
          {image && (
            <Col md={6} className="d-flex justify-content-around align-items-center">
              <CardImg src={image} className="img-fluid rounded" />
            </Col>
          )}
          {fileLinks && (
            <Col md={6}>
              <ul className="list-group">
                {fileLinks.map((link, idx) => (
                  <li key={idx} className="list-group-item">
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
          )}
        </Row>
      </Card.Body>
    </Card>
  );
  