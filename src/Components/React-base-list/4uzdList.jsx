
const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

function Dogs4 () {
return (
<div>
    <h2>dogs4</h2>
    <div className="sq-bin">
        {
            dogs.filter(dog => dog[0] === dog[0].toLowerCase()).map((dog, i) => {
                return (
                    <div className="sq" key={i}>{dog}</div>
                )
            })
        }
    </div>
</div>
)
}

export default Dogs4;