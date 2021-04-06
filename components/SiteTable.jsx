import React from 'react';
import NextLink from 'next/link';
import { Box, Link } from '@chakra-ui/react';
import dayjs from 'dayjs';

import { Table, Tr, Th, Td } from './Table';
import { DeleteSiteButton } from './DeleteSiteButton';

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
            <Th width="50px">{''}</Th>
          </Tr>
        </thead>
        <tbody>
          {sites.map((site, index) => (
            <Box as="tr" key={site.id}>
              <Td>
                {site.name}
              </Td>
              <Td>
                <Link href={site.url} isExternal>
                  {site.url}
                </Link>
              </Td>
              <Td>
              <NextLink
                  href="/site/[siteId]"
                  as={`/site/${site.id}`}
                  passHref
                >
                  <Link color="blue.500" fontWeight="medium">View feedback</Link>
                </NextLink>
              </Td>
              <Td>{dayjs(site.createAt).format('MMM D, YYYY h:mm A')}</Td>
              <Td>
                <DeleteSiteButton siteId={site.id} />
              </Td>
            </Box>
          ))}
        </tbody>
      </Table>
    </Box>
  );
};
