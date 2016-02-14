kiosk.controller('NewsExpansion', ['$scope', '$http', function($scope, $http){
    $scope.articleExpansion = {
        primary: {},
        secondary: {}
    };

    function setExpansion(articleTier, articleIndex, state) {
        $scope.articleExpansion[articleTier][articleIndex] = state;
        var target = document.querySelector('.article-' + articleTier + '-index-' + articleIndex);
        if(state) {
            target.classList.add('article-expanded');
        }
        else {
            target.classList.remove('article-expanded');
        }
    }

    $scope.expand = function expand(articleTier, articleIndex) {
        var target = document.querySelector('.article-' + articleTier + '-index-' + articleIndex);
        if(target.classList.contains('article-expanded')) {
            setExpansion(articleTier, articleIndex, false);
        }
        else {
            var primaryArticles = document.querySelectorAll('.front-view .article-primary');
            var secondaryArticles = document.querySelectorAll('.front-view .article-secondary');

            for(var i = 0; i < primaryArticles.length; i++) {
                setExpansion('primary', i, false);
            }
            for(var i = 0; i < secondaryArticles.length; i++) {
                setExpansion('secondary', i, false);
            }

            setExpansion(articleTier, articleIndex, true);
        }
    }

    $scope.loadArticles = function loadArticles() {
        var primaryArticles = document.querySelectorAll('.front-view .article-primary .id');
        var secondaryArticles = document.querySelectorAll('.front-view .article-secondary .id');

        for(var i = 0; i < primaryArticles.length; i++) {
            var currArticleIndex = primaryArticles[i].innerHTML;
            setExpansion('primary', currArticleIndex, false);
        }
        for(var i = 0; i < secondaryArticles.length; i++) {
            var currArticleIndex = secondaryArticles[i].innerHTML;
            setExpansion('secondary', currArticleIndex, false);
        }
    }

    setTimeout($scope.loadArticles, 1);
}]);
