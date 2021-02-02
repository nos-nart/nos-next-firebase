import React from 'react';
import { Box, Link } from '@chakra-ui/react';
import dayjs from 'dayjs';

import { Table, Tr, Th, Td } from './Table';

export const SiteTable = ({ sites }) => {
  return (
    <Box w="100%" overflowX="scroll">
      <Table w="full">
        <thead>
          <Tr>
            <Th>Name</Th>
            <Th>Site Link</Th>
            <Th>Feedback Link</Th>
            <Th>Date Added</Th>
            {/* <Th width="50px">{''}</Th> */}
          </Tr>
        </thead>
        <tbody>
          {sites.map((site, index) => (
            <Box as="tr" key={site.id}>
              <Td>
                {site.name}
              </Td>
              <Td>
                {site.url}
              </Td>
              <Td>
                <Link>Feedback link</Link>
              </Td>
              <Td>{dayjs(site.createAt).format('MMM D, YYYY h:mm A')}</Td>
            </Box>
          ))}
        </tbody>
      </Table>
    </Box>
  );
};
