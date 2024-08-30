import { IoPersonOutline } from "react-icons/io5";
import mobile from "../assets/images/mobile.png";

function DownloadMovie() {
    return ( <
        div className = " bg-box-color" >
        <
        div className = " DownloadMovieBox container  border-radius-0-8-rem" > <
        div className = "  row  description" >
        <
        div className = "col-lg-6 col-md-12 " >
        <
        h3 className = "text-color-white fs-3-2-rem fw-lighter " > Download Your Movies Watch Offline.Enjoy on Your Mobile < /h3> <
        p className = "mt-5 first-text-color fs-1-8-rem " > Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries..</p> <
        div className = "mt-5 d-flex gap-5 " >
        <
        button className = "px-5 py-2 icon-color  fw-bold fs-2-0-rem bg-black-color border-radius-0-4-rem" > HD 4 K < /button> <
        button className = "px-5 py-2 icon-color  fw-bold fs-2-0-rem bg-black-color border-radius-0-4-rem text-align-left" >
        <
        div className = "d-flex align-items-center gap-2" > <
        IoPersonOutline className = "m-0" / >
        <
        p > 2 K < /p></div > < /
        button > < /
        div > <
        /div> <
        div className = " col col-lg-6 col-md-12 mobileImage" >
        <
        img src = { mobile }
        alt = "mobile"
        className = "w-100" / >


        <
        /
        div >
        <
        /div>

        <
        /div> < /
        div >
    )
}

export default DownloadMovie