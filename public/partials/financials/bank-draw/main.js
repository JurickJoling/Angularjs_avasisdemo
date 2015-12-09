app.controller('BankDrawCtrl',
    ['$scope', '$state', function ($scope, $state) {
        $scope.currentStep = 'bankdraw.payment-application';
        $scope.steps = [{
            state: 'bankdraw.payment-application',
            name: 'Payment Application'
        },
        {
            state: 'bankdraw.draw-details',
            name: 'Draw Details'
        },
        {
            state: 'bankdraw.compliance',
            name: 'Compliance'
        },
        {
            state: 'bankdraw.documents',
            name: 'Documents'
        },
        {
            state: 'bankdraw.payment-details',
            name: 'Payment Details'
        },
        {
            state: 'bankdraw.finalize',
            name: 'Finalize'
        }];

        $scope.setCurrentStep = function(state) {
            $scope.currentStep = state;
            var index = getStepIndex(state);

            // reset states
            _.each($scope.steps, function(e) {
                e.active = false;
                e.clickable = false;
            })

            // set current state as active
            $scope.steps[index].active = true;

            // set past stats as clickable
            for (var i = 0; i <= index; i++) {
                $scope.steps[i].clickable = true;
            }
        }
        $scope.goNext = function() {
            var index = getStepIndex($scope.currentStep);
            if (index == $scope.steps.length -1 ) // if final step
                return;
            $state.go($scope.steps[index + 1].state);
        }

        getStepIndex = function(step) {
            return _.findIndex($scope.steps, function(e) { return step == e.state; });
        }
    }]);