import { Card, CardImg, CardSubtitle, CardTitle } from "reactstrap";



function RenderMenu({ items }) {
    return (
        items.map(dish => {
            return (
                <Card className="col-4" key={dish.id}>
                    {/* <CardImg src={dish.image} className="menu--card-img"></CardImg> */}
                    {/* <CardImgOverlay src={dish.image} > */}
                    <CardImg src={dish.image} className="menu--card-img"></CardImg>
          
                        <CardTitle>{dish.name}</CardTitle>
                        {dish.price ? <CardSubtitle> {dish.price}</CardSubtitle> : null}
                        {dish.designation ? <CardSubtitle> {dish.designation}</CardSubtitle> : null}
                   
                    {/* </CardImgOverlay> */}
                </Card>
            )
        })
    );
}

function Home(props) {
    return (
        <div className="Contact">
            <div className="container">
                <div className="row row-content">
                 
                    <RenderMenu items={props.dishes}></RenderMenu>
                
                    <RenderMenu items={props.promotion}></RenderMenu>
               
                    <RenderMenu items={props.leader}></RenderMenu>
                </div>
            </div>
        </div>
    );
}

export default Home;