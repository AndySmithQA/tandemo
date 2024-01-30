import { useQuery } from "@tanstack/react-query"

export default function Heroes() {
    
    const { isLoading, error, data } = useQuery({
        queryKey: ['heroes'],
        queryFn: () => 
            fetch('http://localhost:4000/heroes')
            .then(res => res.json())  
    })
    if (isLoading) return <div>Loading...</div>

    if (error) return <div>An error has occurred: {error.message}</div>
    
    
    return (
        <>
        <h1>Heroes</h1>
            {data && data.map(hero => (
                <div key={hero.id}>
                    <h2>{hero.name}</h2>
                    <p>{hero.alias}</p>
                </div>
            )
            )}  
        </>
    )
}