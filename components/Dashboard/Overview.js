import { StyleSheet, View, Text, Dimensions } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { LineChart } from "react-native-chart-kit";
import { useState, useEffect } from "react";

export default function Overview() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  let roundTime = (hours, minutes, minutesToRound) => {
    // Convert hours and minutes to minutes
    let time = hours * 60 + minutes;
    let rounded = Math.round(time / minutesToRound) * minutesToRound;

    let roundedHours = Math.floor(rounded / 60);
    let roundedMinutes = rounded % 60;

    return { hours: roundedHours, minutes: roundedMinutes };
  };

  const timeArray = [
    {
      title: "5hr ago",
      time: roundTime(time.getHours(), time.getMinutes(), 30),
      suffix: time.getHours() - 5 < 12 ? "am" : "pm",
    },
    {
      title: "4hr ago",
      time: roundTime((time.getHours() - 4) % 12, time.getMinutes(), 30),
      suffix: time.getHours() - 5 > 12 ? "am" : "pm",
    },
    {
      title: "3hr ago",
      time: roundTime((time.getHours() - 3) % 12, time.getMinutes(), 30),
      suffix: time.getHours() - 5 < 12 ? "am" : "pm",
    },
    {
      title: "2hr ago",
      time: roundTime((time.getHours() - 2) % 12, time.getMinutes(), 30),
      suffix: time.getHours() - 5 < 12 ? "am" : "pm",
    },
    {
      title: "1hr ago",
      time: roundTime((time.getHours() - 1) % 12, time.getMinutes(), 30),
      suffix: time.getHours() - 5 < 12 ? "am" : "pm",
    },
    {
      title: "now",
      time: roundTime(time.getHours() % 12, time.getMinutes(), 15),
      suffix: time.getHours() - 5 < 12 ? "am" : "pm",
    },
  ];

  return (
    <View style={styles.overview}>
      <View style={styles.textContainer}>
        <Text style={styles.overviewText}>Overview</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.dateText}>Today</Text>
          <AntDesign name='caretdown' />
        </View>
      </View>

      <View style={styles.container}>
        <View>
          <LineChart
            data={{
              labels: [
                `${timeArray[0].time.hours}:${timeArray[0].time.minutes} ${timeArray[0].suffix} `,
                `${timeArray[1].time.hours}:${timeArray[1].time.minutes} ${timeArray[1].suffix} `,
                `${timeArray[2].time.hours}:${timeArray[2].time.minutes} ${timeArray[2].suffix} `,
                `${timeArray[3].time.hours}:${timeArray[3].time.minutes} ${timeArray[3].suffix} `,
                `${timeArray[4].time.hours}:${timeArray[4].time.minutes} ${timeArray[4].suffix} `,
                `${timeArray[5].time.hours}:${timeArray[5].time.minutes} ${timeArray[5].suffix} `,
              ],
              datasets: [
                {
                  data: [4, 5, 6, 4, 5, 6, 3],
                },
              ],
            }}
            width={Dimensions.get("window").width + 50} // from react-native
            height={200}
            yAxisLabel='$'
            yAxisSuffix='k'
            yAxisInterval={10} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "blue",
              backgroundGradientFrom: "white",
              backgroundGradientTo: "white",
              decimalPlaces: 0, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "blue",
              },
            }}
            bezier
            style={{
              marginVertical: 10,
              marginLeft: -30,
              borderRadius: 16,
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overview: {
    height: 300,
    position: "absolute",
    width: "100%",
    top: 130,
  },
  container: {
    width: "100%",
    height: 180,
    borderColor: "lightgray",
    borderStyle: "solid",
    borderWidth: 1,
  },
  overviewText: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },
  dateText: {
    fontSize: 15,
    padding: 10,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
