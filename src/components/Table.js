import "../styles/Table.css";
import data from "./myIssuesData"

function Table() {
    let containsData = true;
    if (data.length === 0) {
        containsData = false;
    }
    
    return (
        <div>
            {containsData?(
            <div className="table">
                <h1>Issues Table</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Issue Number</th>
                            <th>Issue Title</th>
                            <th>Issue Description</th>
                            <th>Issue Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {containsData && (
                            data.map((value, key) => {
                                return (
                                    <tr key={key}>
                                        <td>{value.issueNumber}</td>
                                        <td>{value.issueTitle}</td>
                                        <td>{value.issueDesc}</td>
                                        <td>{value.issueDate}</td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>
            ):
            <div>
                <h3 className="no-commit">No commits raised</h3>
            </div>    
            }
        </div>
    );
}

export default Table;
