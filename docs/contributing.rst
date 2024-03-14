Contributing
============

Graphene-UI is open source and anyone is free to contribute. PR's are welcomed and will be reviewed in a timely manner, and long-term contributors will be given access to the repo.

If you would like to get involved, we have a Slack channel where you can ask questions and get help.

Development process
-------------------

- Bugs are always worked before enhancements
- Developers should work each issue according to a numbered branch corresponding to the issue using ``git checkout -b 123``

Github issues are being used to track bugs and feature requests. 

Categorization of issues
~~~~~~~~~~~~~~~~~~~~~~~~

- **New issues** have not been categorized yet or are tagged as question when seeking clarification.
- **Backlog issues** have been assigned to a Milestone and are waiting for a dev to estimate and claim.
- **In Progress issues** are being actively worked on.
- **Testing issues** are waiting for independent tests. (Methodology fully defined as of yet, so devs test their own work for now)
- **Closed issues** are complete

Coding style guideline
----------------------

Our style guideline is based on `Airbnb JavaScript Style Guide <https://github.com/airbnb/javascript>`_, with few exceptions:

- Strings are double quoted
- Additional trailing comma (in arrays and objects declaration) is optional
- 4 spaces tabs
- Spaces inside curly braces are optional

We strongly encourage to use _eslint_ to make sure the code adhere to our style guidelines.

To install eslint and its dependencies, run::

    npm install -g eslint-config-airbnb eslint-plugin-react eslint babel-eslint

Testing
-------

In order for jest to correctly follow paths it is necessary to add a local path to your NODE_PATH variable. Under Ubuntu, you can do so by running the following from the web directory::

    export NODE_PATH=$NODE_PATH:.


Tests are then run using::

    yarn test
