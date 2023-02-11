import React from "react";
import { Table, Image, Text, Button } from "@geist-ui/core";
import { Link } from "react-router-dom";
import FadeIn from "react-fade-in";
import logo from "../../assets/thoth-logo.png";
import champions from "./champions.json";

const Champions = () => {
  const { winners } = champions;
  return (
    <div className="thoth__champions-page">
      <div className="thoth__champions-page__container">
        <FadeIn>
          <Link to="/">
            <div className="thoth__puzzle-page__header">
              <div className="thoth__puzzle-page__title">
                <Text h1>Thoth</Text>
              </div>
              <div className="thoth__puzzle-page__logo">
                <Image width="75px" height="75px" src={logo} />
              </div>
            </div>
          </Link>
          <div className="thoth__champions-page__title">
            <Text h4>Hall of Fame</Text>
          </div>
          <div className="thoth__champions-page__list">
            <Table data={winners}>
              <Table.Column prop="name" label="Name" />
              <Table.Column prop="tournamentName" label="Tournament Won" />
              <Table.Column prop="points" label="Points" />
            </Table>
          </div>
          <div className="thoth__champions-page__button">
            <Link to="/">
              <Button>Go to Homepage</Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Champions;
