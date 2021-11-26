import {Button, Card, CardBody, CardFooter, CardImg, CardSubtitle, CardText, CardTitle} from "reactstrap";

const ProductCard = (props) => {
    let title=(props.item.title).slice(0,20)+" ..."
    let desc=(props.item.description).slice(0,50)+" ..."
  return(
      <>
          <Card className='product-card pt-3'>
              <CardImg
                  alt= {props.item.title}
                  src={props.item.image}
                  top
                  width="100%"
              />
              <CardBody>
                  <CardTitle tag="h5">
                      {
                          title
                      }
                  </CardTitle>
                  <CardSubtitle
                      className="mb-2 text-muted"
                      tag="h6"
                  >
                      {props.item.category}
                  </CardSubtitle>
                  <CardText>
                      {desc}
                  </CardText>
                  <Button>
                      Read More
                  </Button>
              </CardBody>
              <CardFooter className='w-100 text-center'>
                  Price: {props.item.price+" $"}
              </CardFooter>
          </Card>
      </>
  )
}

export default ProductCard;