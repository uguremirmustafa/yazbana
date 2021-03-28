import { Badge, Text } from '@chakra-ui/layout';
import { parseISO, format } from 'date-fns';
import turkishLocale from 'date-fns/locale/tr';

export default function Date({ dateString, fontSize }) {
  const date = parseISO(dateString);
  return (
    <Badge
      as="time"
      dateTime={dateString}
      fontWeight="bold"
      fontSize={fontSize ? fontSize : 'xs'}
      transition="ease-in-out .3s"
      cursor="pointer"
      _hover={{ opacity: '70%' }}
      textTransform="capitalize"
    >
      {format(date, 'dd MMMM, yyyy', { locale: turkishLocale })}
    </Badge>
  );
}
