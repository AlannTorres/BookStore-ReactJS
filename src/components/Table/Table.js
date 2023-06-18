import TableBS from 'react-bootstrap/Table';

export const Table = ({ childrenHead, childrenHeadbody }) => {
  return (
    <TableBS striped bordered hover>
        <thead>
            <tr>
                <th></th>
                {childrenHead}
            </tr>
        </thead>
        <tbody>
            {childrenHeadbody}
        </tbody>
    </TableBS>
  );
}
