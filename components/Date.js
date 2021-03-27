import { Text } from '@chakra-ui/layout';
import { parseISO, format } from 'date-fns';

export default function Date({ dateString, fontSize }) {
  const date = parseISO(dateString);
  return (
    <Text
      as="time"
      dateTime={dateString}
      fontWeight="bold"
      fontSize={fontSize ? fontSize : 'sm'}
      opacity="70%"
      transition="ease-in-out .3s"
      cursor="pointer"
      _hover={{ opacity: '100%' }}
    >
      {format(date, 'LLLL	d, yyyy')}
    </Text>
  );
}
