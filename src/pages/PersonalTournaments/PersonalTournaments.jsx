import React from "react";
import { Table, Image, Text, Button } from "@geist-ui/core";
import { Link } from "react-router-dom";
import FadeIn from "react-fade-in";
import logo from "../../assets/thoth-logo.png";
import tournaments from "./userATournaments.json";

const PersonalTournaments = () => {
  const { tournamentList } = tournaments;

  const renderAction = () => {
    const navigationHandler = () => {
        
    }
    return (
      <Button auto scale={1/3} font="12px" onClick={navigationHandler}>Go To Tournament</Button>
    )
  }
  return (
    <div className="thoth__personal-tournaments-page">
      <div className="thoth__personal-tournaments-page__container">
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
          <div className="thoth__personal-tournaments-page__title">
            <Text h4>My Tournaments</Text>
          </div>
          <div className="thoth__personal-tournaments-page__list">
            <Table data={tournamentList}>
              <Table.Column prop="name" label="Name" />
              <Table.Column prop="weeksLeft" label="No. Weeks Remaining" />
              <Table.Column prop="currentPlacement" label="Current Placement" />
              <Table.Column prop="operation" label="" render={renderAction} />
            </Table>
          </div>
          <div className="thoth__personal-tournaments-page__button">
            <Link to="/">
              <Button>Go to Homepage</Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default PersonalTournaments;
