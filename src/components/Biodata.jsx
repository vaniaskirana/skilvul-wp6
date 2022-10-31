const Biodata = ({imgurl, name, kelompok}) => {
return (
    <div className="container">
        <img src={imgurl} width="150" className="profil-vania"/>    
        <div className='biodata'>
            <h3>{name}</h3>
            <h5>{kelompok}</h5>
        </div>
    </div>
);
};

export default Biodata;