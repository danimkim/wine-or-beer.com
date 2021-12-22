import type { NextPage } from "next";
import { Error, Loading, BeerCard } from "../../components";
import { useBeersData } from "../../hooks/useBeersData";
import { Beer } from "../../types/Beer";
import { ButtonBack } from "../../components/ButtonGoBack";


const AlePage: NextPage = () => {
    const name = 'ale';
    const { data, error } = useBeersData(name);

    if(error) return <Error />
    if(!data) return <Loading />

  return (
    <div>
      <ButtonBack />
      <h1>Ale List</h1>
      <main>
            {data.map((beerData: Beer) => {
                return (
                    <BeerCard key={`ale-list-${beerData.id}`} beerData={beerData}/>
                )
            })}
      </main>
    </div>
  );
};

export default AlePage;