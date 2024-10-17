import { Stack, Box } from '@mui/material';
import { Text } from '@/components/Text';

const style = {
  container: {
    height: '30px',
  },
};

export const ProductInfo = () => {
  return (
    <Box sx={style.container}>
      <Stack direction='row' spacing={0.5}>
        <Text type='largeRed'>43%</Text>
        <Text type='large'>15,660</Text>
      </Stack>
      <Text type='small'>모디무드</Text>
      <Text type='small'>[핏보장/코디추천]스웨이드 코튼 투버튼 가을 롱 팬츠 - 5color</Text>
    </Box>
  );
};
