import BandSpace from "./BandSpace"
import './BandList.css';
import data from './metal.json'

function BandList() {

    const bands = data.map(( { band_name, fans, formed, origin, split, style }, i) => {
        return (
            <BandSpace
            id={i}
            name={band_name}
            fans={fans}
            formed={formed}
            origin={origin}
            split={split}
            style={style}
            />
        )
    })

    return (
        <div className='BandList'>
            { bands }
        </div>
    )
}

export default BandList