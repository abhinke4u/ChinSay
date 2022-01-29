# To Start API
1. Open the solution in visual studio from location: API\GreenVegetables\GreenVegetables.sln.
2. Ensure to have internet connection to complete nuget restore from nuget.org.
3. Click on Menu Debug --> Start Without Debugging, to make the API run in localhost with IIS express.
4. The API is currently configured to run on `https://localhost:44343/`.

# To Start Client Application
1. Navigate to the folder APP\GreenVegetables in command line.
2. Ensure to have internet connection to complete the node module installation from npmjs.org.
3. Ensure to have node and angular installed on the machine.
4. Run command `npm run start`
5. Open a browser tab and navigate to `localhost:4200` to start exploring the application.

## Note:
**If you need to deploy only, we need to generate output from visual studio for IIS web app and then deploy in IIS as a web app and after that we need to change the environment variable for deployed API URI in angular project before building angular output using `npm run build` command and then deploy the generated files to another IIS web app. These steps *can be automated to be execute with single script* when we have access to the server where IIS is hosted.**