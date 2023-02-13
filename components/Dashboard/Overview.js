import { StyleSheet, View, Text, Dimensions } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { LineChart } from "react-native-chart-kit";
import { useState, useEffect } from "react";
import moment from "moment/moment";

export default function Overview({ transactions }) {
  const [times, setTimes] = useState();
  const [data, setData] = useState();
  useEffect(() => {
    let priceOnly = transactions.map((item) => {
      if (item.orderDate) return item.orderDate;
    });
    setData(priceOnly);
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  let rightnow = new Date();
  let oneAgo = moment(rightnow).subtract(1, "hour").format("hh:mm");
  let twoAgo = moment(rightnow).subtract(2, "hour").format("hh:mm");
  let threeAgo = moment(rightnow).subtract(3, "hour").format("hh:mm");
  let fourAgo = moment(rightnow).subtract(4, "hour").format("hh:mm");
  let fiveAgo = moment(rightnow).subtract(5, "hour").format("hh:mm");

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
                fiveAgo,
                fourAgo,
                threeAgo,
                twoAgo,
                oneAgo,
                moment(rightnow).format("hh:mm"),
              ],
              datasets: [
                {
                  data: [1, 2, 3, 4],
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
