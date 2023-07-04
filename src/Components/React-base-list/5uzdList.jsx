
const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

function Dogs5 () {
return (
<div>
    <h2>dogs4</h2>
    <div className="sq-bin">
        {
            dogs.map((dog, i) => {
                return (
                    <div className="sq" key={i} style={{
                        backgroundColor: dog.length > 6 ? 'green' : 'red'
                    }}>
                        {dog} <i>{dog.length}</i></div>
                )
            })
        }
    </div>
</div>
)
}

export default Dogs5;