import React from "react";
import {Breadcrumbs, Link, Typography} from "@material-ui/core/index";
import { withRouter } from "react-router-dom";
import "../scss/App.scss"

const Crumbs = props => {
    const {
        history,
        location: { pathname }
    } = props;
    const pathnames = pathname.split("/").filter(x => x);
    return (
        <section className="full menuContainer__smallMenu">
            <div className="container-lg">
                <Breadcrumbs aria-label="breadcrumb">
                    {/*link do home*/}
                    {pathnames.length > 0 ? (
                        <Link onClick={() => history.push("/")}>Home</Link>
                    ) : (
                        <Typography> Home </Typography>
                    )}
                    {/*generowanie ściezki*/}
                    {pathnames.map((name, index) => {
                        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                        const isLast = index === pathnames.length - 1;
                        return isLast ? (
                            <Typography key={name}>{name}</Typography>
                        ) : (
                            <Link key={name}  onClick={() => history.push(routeTo)}>
                                {name}
                            </Link>
                        );
                    })}
                </Breadcrumbs>
            </div>
        </section>
    );
};

export default withRouter(Crumbs);