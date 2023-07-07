import { useEffect, useState } from "react";
import TitlePages from "../components/atoms/TitlePages";
import Container from "../components/layout/Container";
import BookBanner from "../components/molecules/BookBanner";
import TeamCard from "../components/molecules/TeamCard";

const Team = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => setTeam(data.users));
  }, []);

  //console.log(team);

  return (
    <>
      <section className="mt-40">
        <Container>
          <TitlePages title="Our Team" />
          <div className="grid gap-12 1024:gap-16 grid-cols-2 1024:grid-cols-12 mt-24">
            {team.map((member, i) => {
              return <TeamCard key={i} member={member} />;
            })}
          </div>
        </Container>
        <BookBanner />
      </section>
    </>
  );
};

export default Team;
