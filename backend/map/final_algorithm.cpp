#include <iostream>
#include <vector>
#include <cmath>
#include <utility>

// Sample train properties
struct Train {
    int emptySpace;
    std::pair<double, double> coordinates; // Train coordinates (replace with actual coordinates)
};

// Sample station objects
struct Station {
    std::pair<double, double> currentLocation;
    int timeLimit;
    bool coalavailable;
    bool isRake;
    std::pair<double, double> destinationLocations;
    std::vector<double> destinationDistances;
    int totalCapacities;
    int currentCapacity;
    bool validDestination;
};

// Function to calculate distance between two coordinates (you can use a more accurate formula)
double calculateDistance(const std::pair<double, double>& coord1, const std::pair<double, double>& coord2) {
    return std::sqrt(std::pow(coord2.first - coord1.first, 2) + std::pow(coord2.second - coord1.second, 2));
}

int main() {
    // Sample train properties
    Train train;
    train.emptySpace = 1500;
    train.coordinates = std::make_pair(42.0, -71.0); // Replace with actual coordinates.

    // Sample station objects
    std::vector<Station> stations;
    // ... (add station objects here)

    // Create a vector to store the filtered stations
    std::vector<Station> filteredStations;

    // Iterate through the stations
    for (Station& station : stations) {
        if (station.timeLimit > 3 &&
            station.totalCapacities - station.currentCapacity >= train.emptySpace &&
            station.coalavailable == true &&
            station.isRake == false) {
            
            // Calculate the distance between the train and the station
            double distance = calculateDistance(station.currentLocation, train.coordinates);
            station.destinationDistances.push_back(distance);

            // Check if the station meets the nearest distance condition
            if (distance == *std::min_element(station.destinationDistances.begin(), station.destinationDistances.end())) {
                filteredStations.push_back(station);
            }
        }
    }

    // Output the filtered stations that meet all conditions
    for (const Station& station : filteredStations) {
        std::cout << "Filtered Station:" << std::endl;
        // Output station information here
        // You should print station attributes like station.currentLocation, station.timeLimit, etc.
    }

    return 0;
}
