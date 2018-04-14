// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach((driver) => console.log(driver.name));
}

function logDriversByHometown(drivers, hometown) {
  const matched = drivers.filter((driver) => hometown === driver.hometown);
  logDriverNames(matched);
}

function driversByRevenue() {

}

function driversByName() {

}

function totalRevenue() {

}

function averageRevenue() {

}
