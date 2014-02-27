angular.module('app', ['oci.treeview']).controller('AppCtrl', function ($scope, $timeout) {
    $scope.treeData = {
        label: 'Parent',
        state: 'expanded',
        children: [
            {
                label: 'Child1',
                state: 'expanded',
                children: [
                    {
                        label: 'Grandchild1',
                        state: 'leaf',
                        children: []
                    },
                    {
                        label: 'Grandchild2',
                        state: 'leaf',
                        children: []
                    },
                    {
                        label: 'Grandchild3',
                        state: 'expanded',
                        children: [
                            {
                                label: 'Greatgrandchild1',
                                state: 'leaf',
                                children: []
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Child2',
                state: 'leaf',
                children: []
            }
        ]
    };

    $scope.getMoreData = function (node) {
        return $timeout(function () {
            if (!node.complete) {
                node.children = node.children.concat({
                    label: 'New Node',
                    state: 'leaf',
                    children: [],
                    complete: false
                });
                node.state = 'expanded';
                node.complete = true;
            }
        });
    };
});