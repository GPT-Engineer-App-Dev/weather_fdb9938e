import React, { useState } from "react";
import { Box, VStack, Text, Heading, Image, HStack, Divider, Spinner } from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";

const WeatherIcon = ({ icon }) => {
  return <Image src={`https://placehold.co/600x400`} w="100px" />;
};

const WeatherData = ({ label, value }) => (
  <VStack spacing={1}>
    <Text fontSize="sm" color="gray.500">
      {label}
    </Text>
    <Text fontSize="lg">{value}</Text>
  </VStack>
);

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState(null);

  // Simulating an API call
  setTimeout(() => {
    setWeatherData({
      city: "San Francisco",
      temperature: "58°",
      description: "Partly Cloudy",
      humidity: "87%",
      wind: "8 mph",
    });
    setLoading(false);
  }, 2000);

  return (
    <Box p={8} maxW="400px" mx="auto" textAlign="center">
      <VStack spacing={8}>
        {loading ? (
          <Spinner size="xl" />
        ) : (
          <>
            <VStack spacing={2}>
              <HStack>
                <FaMapMarkerAlt />
                <Heading size="lg">{weatherData.city}</Heading>
              </HStack>
              <Text fontSize="sm" color="gray.500">
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "short",
                  day: "numeric",
                })}
              </Text>
            </VStack>
            <WeatherIcon icon={weatherData.description} />
            <Text fontSize="6xl" fontWeight="bold">
              {weatherData.temperature}
            </Text>
            <Text fontSize="xl">{weatherData.description}</Text>
            <Divider />
            <HStack spacing={8}>
              <WeatherData label="Humidity" value={weatherData.humidity} />
              <WeatherData label="Wind" value={weatherData.wind} />
            </HStack>
          </>
        )}
      </VStack>
    </Box>
  );
};

export default Index;
