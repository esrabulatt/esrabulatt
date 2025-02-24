import Card from 'react-bootstrap/Card';

const CardComponent = ({ icon, title, content }) => {
    return (
        <div className="col-lg-6 col-xxl-4 mb-5 d-flex justify-content-center">
            <Card className="bg-light border-0 h-100 d-flex flex-column align-items-center text-center p-3 p-lg-5">
                <div 
                    style={{
                        marginTop: "-70px",
                        height: "65px", 
                        width: "65px",  
                        fontSize: "2rem"
                    }} 
                    className="d-flex justify-content-center align-items-center bg-primary text-white rounded-3 p-2 mb-3 bg-gradient"
                > 
                    {icon} 
                </div>
                <h2 className="fs-4 fw-bold">{title}</h2>
                <p className="mb-0">{content}</p>
            </Card>
        </div>
    );
};

export default CardComponent;