import { useTheme } from '@react-navigation/native';
import { FlatList, View } from 'react-native';

export const ScreenIndicator = ({
  count,
  activeIndex,
}: {
  count: number;
  activeIndex: number;
}) => {
  const { colors } = useTheme();

  return (
    <View
      style={{
        marginVertical: 32,
      }}>
      <FlatList
        data={new Array(count)}
        contentContainerStyle={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
        }}
        renderItem={({ index }) => (
          <View
            style={{
              width: 8,
              height: 8,
              borderRadius: 8,
              backgroundColor:
                index === activeIndex ? colors.primary : colors.border,
            }}
            key={index}
          />
        )}
      />
    </View>
  );
};
