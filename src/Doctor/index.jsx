//MATERIAL-UI
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import useMediaQuery from '@mui/material/useMediaQuery';
//REACT-CAROURSEL
import Carousel from "react-elastic-carousel";
//IMAGES
import email from './images/email.png';
import phone1 from './images/phone1.png';
import phone2 from './images/phone2.png';


function Cards({ item }) {
    const matches734 = useMediaQuery('(min-width:734px)');
    const matches564 = useMediaQuery('(min-width:564px)');
    const matches464 = useMediaQuery('(min-width:464px)');
    const matches344 = useMediaQuery('(min-width:344px)');


    return (
        <Card
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                height: !(!matches734&&matches564)?(matches464?"32.625rem":(matches344?"30rem":"24rem")):"27rem",
                backgroundColor: "#FCFCFC",
                boxShadow: "1px 6px 11px -1px rgba(0, 0, 0, 0.25)",
                borderRadius: "25px 25px 0px 0px",
            }}
        >
            <Avatar
                alt="Remy Sharp"
                src="https://thumbs.dreamstime.com/b/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg"
                sx={{ width: !(!matches734&&matches564)?(matches344?132:95):91, height: !(!matches734&&matches564)?(matches344?132:95):91, borderRadius: "12.5rem", marginTop: matches344?"1.325rem":"2.025rem" }}
            />

            <div
                style={{ display: "flex", alignItems: "flex-start", flexDirection: "column", marginTop: "0.1875rem" }}
            >
                <Typography
                    variant="h6"
                    style={{
                        color: "#000000",
                        textAlign: "center",
                        lineHeight: "1.9375rem",
                        fontStyle: "normal",
                        fontWeight: "bold",                        
                        fontSize: !(!matches734&&matches564)?(matches464?"1rem":(matches344?"0.925rem":"0.775rem")):"0.85rem",
                        width: "24.375rem"
                    }}
                >
                    {item.full_name}
                </Typography>

                <Typography
                    variant="body1"
                    style={{
                        color: "rgba(8, 8, 10, 0.7)",
                        textAlign: "center",
                        lineHeight: "1.625rem",
                        fontStyle: "normal",
                        fontWeight: "31.25rem",
                        fontSize: !(!matches734&&matches564)?(matches464?"1rem":(matches344?"0.85rem":"0.6rem")):"0.875rem",
                        width: "24.375rem",
                        marginTop: matches344?"":"-0.55rem"
                    }}
                >
                    {`${item.designation}, ${item.medical_school}`}
                </Typography>

                <Typography
                    variant="body1"
                    style={{
                        color: "rgba(8, 8, 10, 0.7)",
                        textAlign: "center",
                        lineHeight: "1.625rem",
                        fontStyle: "normal",
                        fontWeight: "31.25rem",
                        fontSize: !(!matches734&&matches564)?(matches464?"1rem":(matches344?"0.85rem":"0.6rem")):"0.87rem",
                        width: "24.375rem",
                        marginTop: matches464?"-0.125rem":(matches344?"-0.3rem":"-0.55rem"),
                        paddingBottom: "1rem",
                        marginTop: matches344?"":"-0.75rem"
                    }}
                >
                    {item.speciality}
                </Typography>
            </div>

            <div
                style={{ marginLeft: "-4.6875rem"}}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: matches344?"":"4.25rem"
                    }}
                >
                    <img src={email} alt="email" style={{ width: "1.6rem", height: "1.2rem" }}/>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "flex-start",
                            flexDirection: "column",
                            marginLeft: "0.9375rem"
                        }}
                    >
                        <Typography style={{ color: "#000000", fontSize: !(!matches734&&matches564)?(matches464?"1rem":(matches344?"0.8rem":"0.625rem")):"0.675rem" }} variant="p"> EMAIL </Typography>
                        <span style={{ color: "rgba(8, 8, 10, 0.7)", marginTop: "-0.225rem", fontSize: !(!matches734&&matches564)?((matches464?"1rem":(matches344?"0.8rem":"0.625rem"))):"0.715rem" }}>
                            {item.email}
                        </span>
                    </div>
                </div>
    
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: "0.9375rem",
                        marginLeft: matches344?"":"4.5rem"
                    }}
                >
                    <img src={phone1} alt="phone" style={{ width: "1.6rem", height: "1.485rem" }}/>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "flex-start",
                            flexDirection: "column",
                            marginLeft: "0.9375rem"
                        }}
                    >
                        <Typography style={{ color: "#000000", fontSize: !(!matches734&&matches564)?((matches464?"1rem":(matches344?"0.8rem":"0.625rem"))):"0.675rem" }} variant="p"> Phone Number </Typography>
                        <span style={{ color: "rgba(8, 8, 10, 0.7)", marginTop: "-0.225rem" }}>
                            <p style={{ fontSize: !(!matches734&&matches564)?((matches464?"1rem":(matches344?"0.8rem":"0.625rem"))):"0.715rem" }}>{`${item.country_code}-${item.mobile_number}`} {" /"}</p>
                            <p style={{ marginTop: "-1.25rem", marginLeft: "-0.625rem", fontSize: !(!matches734&&matches564)?((matches464?"1rem":(matches344?"0.8rem":"0.625rem"))):"0.715rem" }}>{`${item.country_code}-${item.mobile_number}`}</p>
                        </span>
                    </div>
                </div>
    
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: matches464?"0":(matches344?"0.485rem":"0.545rem"),
                        marginLeft: matches344?"":"4.5rem"
                    }}
                >
                    <img src={email} alt="email" style={{ width: "1.6rem", height: "1.2rem" }}/>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "flex-start",
                            flexDirection: "column",
                            marginLeft: "0.9375rem"
                        }}
                    >
                        <Typography style={{ color: "#000000", fontSize: !(!matches734&&matches564)?((matches464?"1rem":(matches344?"0.8rem":"0.625rem"))):"0.675rem" }} variant="p"> Hospital </Typography>
                        <span style={{ color: "rgba(8, 8, 10, 0.7)", marginTop: "-0.225rem", fontSize: !(!matches734&&matches564)?((matches464?"1rem":(matches344?"0.8rem":"0.625rem"))):"0.715rem" }}>
                            {item.hospital_name}
                        </span>
                    </div>
                </div>
            </div>

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    paddingTop: "1.875rem"
                }}
            >
                <div
                    style={{
                        width: "10rem",
                        height: "3.4375rem",
                        backgroundColor: "#66D189",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <img src={phone2} alt="phone" style={{ width: matches464?"1.6rem":matches344?"1.2rem":"0.875rem", height: matches464?"1.485rem":matches344?"1.15rem":"0.875rem", marginLeft: matches344?"":"3.765rem", marginTop: matches344?"":"-1.15rem" }}/>
                </div>

                <div
                    style={{
                        width: "10rem",
                        height: "3.4375rem",
                        backgroundColor: "#E8E8E8",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <img src={email} alt="email" style={{ width: matches464?"1.6rem":matches344?"1.2rem":"1.115rem", height:  matches464?"1.2rem":matches344?"1.025rem":"0.785rem", marginLeft: matches344?"":"-3.765rem", marginTop: matches344?"":"-1.15rem"  }}/>
                </div>
            </div>
        </Card>
    )
}


function Doctor({ data }) {
    const matches1044 = useMediaQuery('(min-width:1044px)');
    const matches734 = useMediaQuery('(min-width:734px)');
    const matches707 = useMediaQuery('(min-width:734px)');
    const matches564 = useMediaQuery('(min-width:564px)');
    const matches464 = useMediaQuery('(min-width:464px)');
    const matches344 = useMediaQuery('(min-width:344px)');


    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: matches734?680:!matches564?770:"", itemsToShow: 2 },
        { width: 980, itemsToShow: 3 }
    ];


    return (
        <div
            style={{
                height: "660px",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "0.5rem"
            }}
        >
            <div
                style={{
                    width: "71rem",
                    height: "33rem",
                    marginTop: "-5.625rem",
                    paddingLeft: "1rem",
                    paddingRight: "1rem"
                }}
            >
                <h2
                    style={{
                        letterSpacing: "-0.03125rem",
                        marginLeft: "1.15rem",
                        fontSize: matches464?"2rem":(matches344?"1.75rem":"1.45rem"),
                        marginTop: !(!matches734&&matches564)?"":"3.25rem"

                    }}
                >
                    DOCTOR
                </h2>

                {
                    !matches1044?(
                        (matches734?(
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center"
                                }}
                            >
                                <div
                                    style={{
                                        marginTop: "1rem",
                                        marginLeft: "0.75rem",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        width: "45rem"
                                    }}
                                >
                                    <Carousel breakPoints={breakPoints} showArrows={false}>
                                        {
                                            data.map((item, i) => (
                                                <center
                                                    key={i}
                                                    style={{ width: "20rem" }}
                                                >
                                                    <Cards
                                                        item={item}
                                                    />
                                                </center>
                                            ))
                                        }
                                    </Carousel>
                                </div>
                            </div>
                        ):(
                            <Carousel breakPoints={breakPoints} showArrows={false}
                                itemsToScroll={(!matches734&&matches564)?1:1}
                                itemsToShow={(!matches734&&matches564)?1:1}
                            >
                                {
                                    data.map((item, i) => (
                                        <center
                                            key={i}
                                            style={{ width: !(!matches734&&matches564)?(matches464?(!matches564?"19.75rem":"18.75rem"):(matches344?"17.85rem":"12rem")):"20rem" }}
                                        >
                                            <Cards
                                                item={item}
                                            />
                                        </center>
                                    ))
                                }
                            </Carousel>
                        ))
                    ):(
                        <div
                            style={{
                                marginTop: "1rem",
                                marginLeft: "0.75rem",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <Carousel breakPoints={breakPoints} showArrows={false}>
                                {
                                    data.map((item, i) => (
                                        <center
                                            key={i}
                                            style={{ width: "20rem" }}
                                        >
                                            <Cards
                                                item={item}
                                            />
                                        </center>
                                    ))
                                }
                            </Carousel>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Doctor;