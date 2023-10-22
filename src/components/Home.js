import { Card, CardImg, CardSubtitle, CardTitle } from "reactstrap";



function RenderMenu({ items }) {
    return (
        items.map(dish => {
            return (
                <Card className="col-4 cardMenu" key={dish.id}>
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
        <div className="mainCover">
            <div className='hero--section'> 
                        <h1>ALL EATS OUT</h1>
                        <p>Worlds best cuisines, we are here to offer you the best meals served with the best code in town,
                            Smiles and joys for your stomach and brain
                        </p>
                     
            </div>
            <div className="container">
                <div className="row row-content">
                    <h1 className="text-center  text-uppercase">Featured HighLights This Month</h1>
                </div>
                <div className=" mt-5 row row-content col-12">
                    <RenderMenu items={props.dishes}></RenderMenu>
                    <RenderMenu items={props.promotion}></RenderMenu>
                    <RenderMenu items={props.leader}></RenderMenu>
                </div>
            </div>
        </div>
    );
}
export default Home;