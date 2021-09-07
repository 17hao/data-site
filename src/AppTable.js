import React from "react";
import { withStyles } from "@material-ui/core/Styles";
import Paper from "@material-ui/core/Paper";
import MaUTable from "@material-ui/core/Table";
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

const styles = theme => ({
    root: {
        width: "100%",
        marginTop: theme.spacing.unit * 3,
        overflowX: "auto"
    },
    table: {}
});

class HadoopAppTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    name: "HDFS",
                    link: "shiqihao.info:50070"
                },
                {
                    name: "YARN",
                    link: "shiqihao.info:18088"
                },
                {
                    name: "HBASE",
                    link: "3"
                },
                {
                    name: "HIVE",
                    link: "4"
                }
            ]
        };
    }

    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
                <MaUTable className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>App</TableCell>
                            <TableCell>WEB UI</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.items.map((item, i) => {
                            return (
                                <TableRow key={`row-${i}`}>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>
                                        <a href={item.link}>{item.link}</a>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </MaUTable>
            </Paper>
        );
    }
}

// const AppTable = withStyles(styles)(HadoopAppTable);
// render(<StyledApp />, document.getElementById("root"));

export default withStyles(styles)(HadoopAppTable);