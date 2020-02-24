# Update packages
sudo apt update
sudo apt -y upgrade

# Install Node.js and NPM
sudo apt update
# sudo apt-get install -y nodejs
sudo apt -y install curl dirmngr apt-transport-https lsb-release ca-certificates
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt -y install nodejs

# Install MongoDB
# sudo apt install -y mongodb


# Install NPM
sudo apt install -y npm

# --no-optional suppresses harmless fsevents warnings
# on non-Mac systems
# sudo npm install -g nodemon --no-optional

# Move user to /vagrant on ssh
echo "cd /vagrant" >> /home/vagrant/.bashrc
echo "PS1='\u:\W\$ '" >> /home/vagrant/.bashrc

# Start Mongodb
# sudo systemctl enable mongodb.service
# sudo service mongodb start
